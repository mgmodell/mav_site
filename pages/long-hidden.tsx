import Head from "next/head";
import { useState } from "react";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function LongHidden() {
    const [year, setYear] = useState(0);
    const [typeOfRelative, setTypeOfRelative] = useState('');
    const [name1, setName1] = useState('');
    const [womansName1, setWomansName1] = useState('');
    const [adjective1, setAdjective1] = useState('');
    const [adjective2, setAdjective2] = useState('');
    const [mansName, setMansName] = useState('');
    const [pieceOfFurniture, setPieceOfFurniture] = useState('');
    const [roomInHouse, setRoomInHouse] = useState('');
    const [womansName2, setWomansName2] = useState('');
    const [pluralNoun, setPluralNoun] = useState('');
    const [name2, setName2] = useState('');
    const [noun1, setNoun1] = useState('');
    const [spotInRoom, setSpotInRoom] = useState('');
    const [noun2, setNoun2] = useState('');
    const [opjectInSpace, setObjectInSpace] = useState('');

    const disabled = !(year && typeOfRelative && name1 && womansName1 && adjective1 && adjective2 && mansName && pieceOfFurniture && roomInHouse && womansName2 && pluralNoun);

    return (
        <>
            <Head>
                <title>The Long-Hidden Afkikomen</title>
            </Head>
            <Accordion activeIndex={0} className="w-full md:w-25rem">
                <AccordionTab
                    header="Fill in the Blanks"

                >
                    <p>Fill in the blanks to create a story.</p>
                    <div className="card flex justify-content-center">
                        <p>
                            <FloatLabel>
                                <InputNumber
                                    id="year"
                                    value={year}
                                    useGrouping={false}
                                    onChange={(e) => setYear(e.value || 0)}
                                />
                                <label htmlFor="firstYear">First Year</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="typeOfRelative"
                                    value={typeOfRelative}
                                    onChange={(e) => setTypeOfRelative(e.target.value)}
                                />
                                <label htmlFor="typeOfRelative">Type of Relative</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="name"
                                    value={name1}
                                    onChange={(e) => setName1(e.target.value)}
                                />
                                <label htmlFor="name">Name</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="womansName"
                                    value={womansName1}
                                    onChange={(e) => setWomansName1(e.target.value)}
                                />
                                <label htmlFor="womansName">Woman's Name</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="adjective1"
                                    value={adjective1}
                                    onChange={(e) => setAdjective1(e.target.value)}
                                />
                                <label htmlFor="adjective1">Adjective</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="adjective2"
                                    value={adjective2}
                                    onChange={(e) => setAdjective2(e.target.value)}
                                />
                                <label htmlFor="adjective2">Adjective</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="mansName"
                                    value={mansName}
                                    onChange={(e) => setMansName(e.target.value)}
                                />
                                <label htmlFor="mansName">Man's name</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="pieceOfFurniture"
                                    value={pieceOfFurniture}
                                    onChange={(e) => setPieceOfFurniture(e.target.value)}
                                />
                                <label htmlFor="pieceOfFurniture">Piece of Furniture</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="roomInHouse"
                                    value={roomInHouse}
                                    onChange={(e) => setRoomInHouse(e.target.value)}
                                />
                                <label htmlFor="roomInHouse">Room in House</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="womansName2"
                                    value={womansName2}
                                    onChange={(e) => setWomansName2(e.target.value)}
                                />
                                <label htmlFor="womansName2">Woman's Name</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="pluralNoun"
                                    value={pluralNoun}
                                    onChange={(e) => setPluralNoun(e.target.value)}
                                />
                                <label htmlFor="pluralNoun">Plural Noun</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="name2"
                                    value={name2}
                                    onChange={(e) => setName2(e.target.value)}
                                />
                                <label htmlFor="name2">Name</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="noun1"
                                    value={noun1}
                                    onChange={(e) => setNoun1(e.target.value)}
                                />
                                <label htmlFor="noun1">Noun</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="spotInRoom"
                                    value={spotInRoom}
                                    onChange={(e) => setSpotInRoom(e.target.value)}
                                />
                                <label htmlFor="spotInRoom">Spot in Room</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="noun2"
                                    value={noun2}
                                    onChange={(e) => setNoun2(e.target.value)}
                                />
                                <label htmlFor="noun2">Noun</label>
                            </FloatLabel><br />
                            <FloatLabel>
                                <InputText
                                    id="objectInSpace"
                                    value={opjectInSpace}
                                    onChange={(e) => setObjectInSpace(e.target.value)}
                                />
                                <label htmlFor="objectInSpace">Object in Space</label>
                            </FloatLabel>
                        </p>
                    </div>
                </AccordionTab>

                <AccordionTab
                    disabled={disabled}
                    header={`Story: ${disabled ? 'Not Ready' : 'Click to Read!'}`}
                >
                    <h1>The Long-Hidden Afikomen</h1>
                    <p>Way back in <u>{year}</u>, <u>{typeOfRelative || '_________'}</u> <u>{name1}</u> hid the afikomen so well that no one has ever found it.
                        Technically, that year's family seder never ended. Over the years, all of the cousins have looked
                        for it, but non one has come close to recovering it. Bubbe <u>{womansName1}</u> even hired a <u>{adjective1 || '_________'}</u> private
                        investigator to look into things, but there was no sign of that <u>{adjective2 || '_________'}</u> afikomen.
                    </p>
                    <p>Uncle <u>{mansName || '_________'}</u> swears he saw it once, for a moment, near
                        the <u>{pieceOfFurniture || '_________'}</u> in the <u>{roomInHouse || '_________'}</u>, but
                        when Auntie <u>{womansName2 || '_________'}</u> investigated, all she found was a pile
                        of <u>{pluralNoun || '_________'}</u>.
                    </p>
                    <p>
                        Last year, cousin <u>{name2 || '_________'}</u> mentioned seeing it in an old <u>{noun1 || '_________'}</u> behind
                        the <u>{spotInRoom || '_________'}</u>. To this day, no one knows. That afikomen will probably not be found until there's
                        a <u>{noun2 || '_________'}</u> on the <u>{opjectInSpace || '_________'}</u>.
                    </p>
                </AccordionTab>
            </Accordion>
        </>
    );
}