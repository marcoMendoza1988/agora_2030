import React, { useEffect, useState } from "react";
import Cards from "../../organisms/Cards";
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs, setError, setLoading } from '../../../api/blogAPI';
import axios from "axios";
import { useTranslation } from "react-i18next";

const Blog: React.FC = () => {
    const [activePage, setActivePage] = useState(1);
    const [paginatedData, setPaginatedData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [activeTag, setActiveTag] = useState('');
    const dispatch = useDispatch();
    const {i18n} = useTranslation();

    const response = useSelector((state: any) => state.blogs);
    const loading = useSelector((state: any) => state.blogs.loading);
    const error = useSelector((state: any) => state.blogs.error);

    const fetchBlogData = async() => {
        dispatch(setLoading(true));
        try {
            const lang = i18n.language;
            const path = lang === 'es' ? `1` : `${lang}/1`
            const response = await axios(`https://5vj94.wiremockapi.cloud/blog/${path}`);
          
          if (!response) {
            throw new Error('No se pudieron cargar las tareas.');
          }
          dispatch(setBlogs(response));
          dispatch(setLoading(false))
        } catch (error: any) {
          dispatch(setError(error?.message));
          dispatch(setLoading(false));
        }
    };
    
    useEffect(() => {
        fetchBlogData()
    }, [i18n.language]);

    useEffect(() => {
        if (response?.data) {
            const filtered = activeTag ? response.data.filter((item: any) => item.tag.toUpperCase() === activeTag.toUpperCase() || activeTag === "Todos") : response.data;
            const start = (activePage - 1) * 12;
            const end = start + 12;

            setFilteredData(filtered);
            setPaginatedData(filtered.slice(start, end));
            window.scroll({top: 300, left: 0, behavior: 'smooth' });
        }
    }, [response, activePage, activeTag]);

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    const handleTagFilter = (tag: string) => {
        setActiveTag(tag);
        setActivePage(1);
    };

    return (
        <div className="flex flex-col container mx-auto w-full gap-16 my-[40px] px-[0px] md:px-[25px]">
            <section className="w-full flex flex-col md:flex-row gap-8">
                <div className="w-auto md:w-4/5 flex flex-col bg-[#19417f] mx-[15px] md:mx-0 py-[60px] px-[30px] md:px-[90px] rounded-2xl">
                    <span className="text-left text-[12px] text-white">NUESTRO BLOG</span>
                    <span className="text-left text-[35px] text-white w-auto lg:w-4/5">Conoce nuestros últimos artículos y noticias</span>
                </div>
                <div className="w-auto md:w-2/5 mx-[15px] md:mx-0">
                    <img className="rounded-2xl max-w-[460px] max-h-[305px] w-full" src="https://agora2030.org/wp-content/uploads/2022/10/Frame-348.png" alt="blog agora" />
                </div>
            </section>
            <section className="w-auto md:w-10/12 mx-[15px] md:mx-auto">
                <ul className="bg-[#333333] py-5 px-6 text-white flex flex-wrap md:flex-no-wrap rounded-lg text-[12px] gap-[16px] justify-between">
                    {['Blog', 'Convocatoria abierta', 'Oportunidad Laboral', 'Programa', 'Programa en ejecución', 'Programas ejecutados', 'Sala de Prensa', 'Todos'].map((tag, index) => (
                        <li className="cursor-pointer" key={index} onClick={() => handleTagFilter(tag)}>{tag}</li>
                    ))}
                </ul>
            </section>
            <section className="flex flex-col gap-9 mx-[15px] md:mx-auto">
                <Cards cards={paginatedData} activeTransition={false} />
            </section>
            <section className="w-full flex flex-wrap md:flex-no-wrap justify-center gap-4">
                {Array.from({ length: Math.ceil(filteredData.length / 12) }, (_, i) => (
                    <button className={`${activePage === (i+1) ? 'text-[#19417f]' : 'text-[#c36] hover:text-[#19417f]'}`} key={i} onClick={() => handlePageChange(i + 1)}>{i + 1}</button>
                ))}
            </section>
        </div>
    )
}

export default Blog;
