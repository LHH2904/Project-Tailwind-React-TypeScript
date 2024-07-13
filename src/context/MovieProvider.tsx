import React, { useState, createContext } from "react";
import YouTube from "react-youtube";
import Modal from "react-modal";

const opts= {
    height: "390",
    width: "640",
    playerVars: {
        autoplay: 1,
    },
};

interface MovieTrailer {
    key: string; // Assuming trailer key is a string
}

interface MovieData {
    results: MovieTrailer[]; // Assuming results array contains trailers
}

interface MovieProviderProps {
    children: React.ReactNode;
}

const MovieContext = createContext<({ handleTrailer: (id: number) => void })>({
    handleTrailer: () => {},
});

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState("");

    const handleTrailer = async (id: number) => {
        setTrailerKey("");
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                },
            };

            const response = await fetch(url, options);
            const data: MovieData = await response.json();

            if (data.results.length > 0) {
                setTrailerKey(data.results[0].key);
            } else {
                console.log("Không tìm thấy trailer phim");
            }
            setModalIsOpen(true);
        } catch (error) {
            setModalIsOpen(false);
            console.error(error);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={{
                    overlay: {
                        position: "fixed",
                        zIndex: 9999,
                    },
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                    },
                }}
                contentLabel="Trailer phim"
            >
                {trailerKey && <YouTube videoId={trailerKey} opts={opts} />}
            </Modal>
        </MovieContext.Provider>
    );
};

export { MovieProvider, MovieContext };