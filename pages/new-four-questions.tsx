import Head from "next/head";
import { useState } from "react";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function NewFourQuestions() {
    const [verb1, setVerb1] = useState('');
    const [foodItem, setFoodItem] = useState('');
    const [adjective1, setAdjective1] = useState('');
    const [familyMemberPlural, setFamilyMemberPlural] = useState('');
    const [place, setPlace] = useState('');
    const [typeOfSeasoning, setTypeOfSeasoning] = useState('');
    const [adjective2, setAdjective2] = useState('');
    const [pluralNoun1, setPluralNoun1] = useState('');
    const [aMemoryYouHave, setAMemoryYouHave] = useState('');
    const [verb2, setVerb2] = useState('');
    const [pluralNoun2, setPluralNoun2] = useState('');
    const [place2, setPlace2] = useState('');
    const [verb3, setVerb3] = useState('');
    const [adjective3, setAdjective3] = useState('');
    const [adjective4, setAdjective4] = useState('');
    const [verb4, setVerb4] = useState('');

    const disabled = !(
        verb1 &&
        foodItem &&
        adjective1 &&
        familyMemberPlural &&
        place &&
        typeOfSeasoning &&
        adjective2 &&
        pluralNoun1 &&
        aMemoryYouHave &&
        verb2 &&
        pluralNoun2 &&
        place2 &&
        verb3 &&
        adjective3 &&
        adjective4 &&
        verb4
    );

    const textInput = ( label: string, value: string, setValue: (value: string) => void ) => {
        return(
            <FloatLabel>
                <InputText
                    id={label}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <label htmlFor={label}>{label}</label>
            </FloatLabel>
        )
    }

    return (
        <>
            <Head>
                <title>A New Four Questions</title>
            </Head>
            <Accordion activeIndex={0} className="w-full md:w-25rem">
                <AccordionTab
                    header="Fill in the Blanks"
                >
                    <p>Fill in the blanks to create a story.</p>
                    <div className="card flex justify-content-center">
                        <p>
                            {textInput('Verb', verb1, setVerb1)}
                            {textInput('Food Item', foodItem, setFoodItem)}
                            {textInput('Adjective', adjective1, setAdjective1)}
                            {textInput('Family Member (plural)', familyMemberPlural, setFamilyMemberPlural)}
                            {textInput('Place', place, setPlace)}
                            {textInput('Type of seasoning', typeOfSeasoning, setTypeOfSeasoning)}
                            {textInput('Adjective', adjective2, setAdjective2)}
                            {textInput('Plural noun', pluralNoun1, setPluralNoun1)}
                            {textInput('A memory you have', aMemoryYouHave, setAMemoryYouHave)}
                            {textInput('Verb', verb2, setVerb2)}
                            {textInput('Plural noun', pluralNoun2, setPluralNoun2)}
                            {textInput('Place', place2, setPlace2)}
                            {textInput('Verb', verb3, setVerb3)}
                            {textInput('Adjective', adjective3, setAdjective3)}
                            {textInput('Adjective', adjective4, setAdjective4)}
                            {textInput('Verb', verb4, setVerb4)}
                        </p>
                    </div>
                </AccordionTab>

                <AccordionTab
                    disabled={disabled}
                    header={`Story: ${disabled ? 'Not Ready' : 'Click to Read!'}`}
                >
                    <>
                        <h1>A New Four Questions</h1>
                        <ol>
                            <li>
                                On all other nights we <u>{verb1 || '________'}</u> either leavened <u>{foodItem || '________'}</u>.
                                On this night, why do we eat only <u>{adjective1 || '_________'}</u> matzah?<br />
                                    <strong>Answer:</strong> To remind us of the haste with which our <u>{familyMemberPlural || '_________'}</u> left <u>{place || '_________'}</u>.
                            </li>
                            <li>
                                On all other nights we eat all kinds of <u>{typeOfSeasoning || '_________'}</u>.
                                On this night, why only <u>{adjective2 || '_________'}</u> <u>{pluralNoun1 || '_________'}</u>?<br />
                                <strong>Answer:</strong> To remind us of the time <u>{aMemoryYouHave || '_________'}</u>.
                            </li>
                            <li>
                                On all other nights we do not <u>{verb2 || '___________' }</u> our <u>{pluralNoun2 || '_________'}</u>.
                                On this night, why do we <u>{verb2 || '__________' }</u> them twice?<br/>
                                <strong>Answer:</strong> Some say to remind us of our coming and going from <u>{place2 || '_________'}</u>.
                            </li>
                            <li>
                                On all other nights we <u>{verb3 || '__________'}</u> sometimes <u>{adjective3 || '_________'}</u> and sometimes reclining.
                                On this night, why do we recline?<br />
                                <strong>Answer:</strong> To remind us of how <u>{adjective4 || '_________'}</u> pople <u>{verb4 || '_________'}</u>.<br />
                            </li>
                        </ol>
                    </>
                </AccordionTab>
            </Accordion>
        </>
    );
}