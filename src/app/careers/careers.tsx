// src/components/CompanyList.js
import Image from 'next/image'
import styles from './../page.module.css'
import Link from 'next/link'
import data from './../../../public/careers.json';

const CompanyList = () => {
    return (
        <div>
            <ul>
                {data.companies.map((company, index) => (
                    <li key={index}>
                        <strong>{company.name}</strong> - {company.jobType}{' '} - {' '}
                        <a href={company.link} target="_blank" rel="noopener noreferrer">
                            {company.link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;
