import Head from "next/head";
import { useState } from "react";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';

export default function LongHidden() {
    const [year, setYear] = useState(0);
    const [typeOfRelative, setTypeOfRelative] = useState('');
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


            <h1>Long Hidden</h1>
            <p>Way back in {year}, {typeOfRelative} </p>
        </div>
        </>
    );
}