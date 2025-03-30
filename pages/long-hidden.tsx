import Head from "next/head";
import { useState } from "react";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function LongHidden() {
    const [year, setYear] = useState(0);
    const [typeOfRelative, setTypeOfRelative] = useState('');
    const [name, setName] = useState('');
    const [womansName, setWomansName] = useState('');
    return (
        <>
        <Head>
            <title>The Long-Hidden Afkikomen</title>
        </Head>
        <div>
            <FloatLabel>
                <InputNumber
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.value || 0)}
                    />
                <label htmlFor="firstYear">First Year</label>
            </FloatLabel>
            <FloatLabel>
                <InputText
                    id="typeOfRelative"
                    value={typeOfRelative}
                    onChange={(e) => setTypeOfRelative(e.target.value)}
                    />
                <label htmlFor="typeOfRelative">Type of Relative</label>
            </FloatLabel>
            <FloatLabel>
                <InputText
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                <label htmlFor="name">Name</label>
            </FloatLabel>
            <FloatLabel>
                <InputText
                    id="womansName"
                    value={womansName}
                    onChange={(e) => setWomansName(e.target.value)}
                    />
                <label htmlFor="womansName">Woman's Name</label>
            </FloatLabel>


            <h1>Long Hidden</h1>
            <p>Way back in {year}, {typeOfRelative} {name} hid the afikomen so well that no one has ever found it.
                Technically, that year's family seder never ended. Over the years, all of the cousins have looked
                for it, but non one has come close to recovering it. Bubbe {womansName} even hired a 
            </p>
        </div>
        </>
    );
}