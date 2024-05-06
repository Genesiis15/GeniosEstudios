import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Papa from 'papaparse';
import { ItemReview } from './ItemReview';
import CerrarSesion from './CerrarSesion';

function SentimentAnalysis() {
    const API_URL = "https://api-inference.huggingface.co/models/finiteautomata/beto-sentiment-analysis";
    const headers = { "Authorization": "Bearer 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" };
    const [state, setState] = useState(false);

    const [filter, setFilter] = useState([]);

    const query = async (message) => {
        try {
            const response = await axios.post(API_URL, { inputs: message }, { headers });
            return response.data;
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,

            });
        }
    };

    const queryEmotion = async (message) => {
        try {
            const response = await axios.post("https://api-inference.huggingface.co/models/finiteautomata/beto-emotion-analysis", { inputs: message }, { headers });
            return response.data
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,
            });
            setFilter([])
        }
    };

    const addEmotion = async () => {
        try {
            const files = await Promise.all(filter.map(async (item) => {
                const feelings = await queryEmotion(item.text)
                const reactions = await query(item.text)
                return { ...item, feelings: feelings.flat(), reactions: reactions.flat() }
            }))
            setFilter(files)
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: error,

            });
            setFilter([])
        }
    }




    useEffect(() => {
        addEmotion()
    }, [state]);

    const fileInputRef = useRef();

    const handleFileUpload = () => {
        const file = fileInputRef.current.files[0];
        Papa.parse(file, {
            header: true,
            complete: (results) => {
                setState(true)

                setFilter(results.data.slice(0, 10).map((item, position) => {
                    return {
                        text: item.text,
                        comments: item.comments,
                        likes: item.likes,
                        reactions_count: item.reactions_count,
                        shares: item.shares,
                        id: position,
                        feelings: [],
                        reactions: []
                    }
                }));
            },
        });

    };

    return (
        <div className='flex flex-col items-center'>
            <div className='container border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  gap-4 justif'>

                {filter.map(item => (<ItemReview key={item.id}
                    reactions_count={item.reactions_count}
                    shares={item.shares}
                    text={item.text} comments={item.comments} likes={item.likes}
                    feelings={item.feelings}
                    reactions={item.reactions} />))}
            </div>
            <div className="flex flex-col p-20 justify-center ">
                <h1 className='text-xl mb-5 font-medium'>Datos de Redes Sociales</h1>
                <p className='container text-base mb-5 w-full max-w-md'>En nuestra App, se puede  demostrar una sólida capacidad
                    para monitorear y analizar las reacciones de las redes sociales,
                    lo que va a  permitir comprender mejor las preferencias y opiniones de
                    nuestras audiencias.</p>
                <div className="bg-white dark:bg-gray-950 p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-2xl text-white font-bold mb-4">Seleccionar Archivo</h2>
                    <div className="flex items-center justify-between space-x-4">
                        <label
                            className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            htmlFor="csv-file"
                        >
                            <span className="truncate">Ningun archivo seleccionado</span>
                            <input
                                accept=".csv"
                                ref={fileInputRef}
                                className="sr-only"
                                id="csv-file"
                                type="file" />
                        </label>
                        <button
                            onClick={handleFileUpload}
                            className="bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                            Subir CSV
                        </button>
                    </div>
                </div>
            </div>
            <CerrarSesion />
        </div>

    );
}

export default SentimentAnalysis;
