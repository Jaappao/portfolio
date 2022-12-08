import { FaUniversity, FaRoute } from 'react-icons/fa';

export function IntroductionRow({title, subtitle, current, term, type, description }) {
    const icon = (
        type === "学校" ? <FaUniversity/>
        : type === "アルバイト" ? <FaRoute/> : "");

    
    return (
        <div className=''>
            {icon}
            <div className='text-1xl font-bold'>{title}</div>
            <div>{subtitle}</div>
            <div>{current}</div>
            <div>{term}</div>
            <div>{description}</div>
        </div>
    )
}