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
                            <FloatLabel>
                                <InputText
                                    id="verb1"
                                    value={verb1}
                                    onChange={(e) => setVerb1(e.target.value || 0)}
                                />
                                <label htmlFor="verb1">Verb</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="foodItem"
                                    value={foodItem}
                                    onChange={(e) => setFoodItem(e.target.value || 0)}
                                />
                                <label htmlFor="foodItem">Food Item</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="adjective1"
                                    value={adjective1}
                                    onChange={(e) => setAdjective1(e.target.value || 0)}
                                />
                                <label htmlFor="adjective1">Adjective</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="familyMemberPlural"
                                    value={familyMemberPlural}
                                    onChange={(e) => setFamilyMemberPlural(e.target.value || 0)}
                                />
                                <label htmlFor="familyMemberPlural">Family Member (plural)</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="place"
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value || 0)}
                                />
                                <label htmlFor="place">Place</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="typeOfSeasoning"
                                    value={typeOfSeasoning}
                                    onChange={(e) => setTypeOfSeasoning(e.target.value || 0)}
                                />
                                <label htmlFor="typeOfSeasoning">Type of seasoning</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="adjective2"
                                    value={adjective2}
                                    onChange={(e) => setAdjective2(e.target.value || 0)}
                                />
                                <label htmlFor="adjective2">Adjective</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="pluralNoun1"
                                    value={pluralNoun1}
                                    onChange={(e) => setPluralNoun1(e.target.value || 0)}
                                />
                                <label htmlFor="pluralNoun1">Plural noun</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="aMemoryYouHave"
                                    value={aMemoryYouHave}
                                    onChange={(e) => setAMemoryYouHave(e.target.value || 0)}
                                />
                                <label htmlFor="aMemoryYouHave">A memory you have</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="verb2"
                                    value={verb2}
                                    onChange={(e) => setVerb2(e.target.value || 0)}
                                />
                                <label htmlFor="verb2">Verb</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="pluralNoun2"
                                    value={pluralNoun2}
                                    onChange={(e) => setPluralNoun2(e.target.value || 0)}
                                />
                                <label htmlFor="pluralNoun2">Plural noun</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="place2"
                                    value={place2}
                                    onChange={(e) => setPlace2(e.target.value || 0)}
                                />
                                <label htmlFor="place2">Place</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="verb3"
                                    value={verb3}
                                    onChange={(e) => setVerb3(e.target.value || 0)}
                                />
                                <label htmlFor="verb3">Verb</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="adjective3"
                                    value={adjective3}
                                    onChange={(e) => setAdjective3(e.target.value || 0)}
                                />
                                <label htmlFor="adjective3">Adjective</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="adjective4"
                                    value={adjective4}
                                    onChange={(e) => setAdjective4(e.target.value || 0)}
                                />
                                <label htmlFor="adjective4">Adjective</label>
                            </FloatLabel>
                            <FloatLabel>
                                <InputText
                                    id="verb4"
                                    value={verb4}
                                    onChange={(e) => setVerb4(e.target.value || 0)}
                                />
                                <label htmlFor="verb4">Verb</label>
                            </FloatLabel>
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