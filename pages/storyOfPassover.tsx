import Head from "next/head";
import { useState } from "react";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function StoryOfPassover() {

    const [governmentRank, setGovernmentRank] = useState('');
    const [nation, setNation] = useState('');
    const [peopleOfAnotherNation, setPeopleOfAnotherNation] = useState('');
    const [noun, setNoun] = useState('');
    const [placeName, setPlaceName] = useState('');
    const [liquid, setLiquid] = useState('');
    const [pluralNoun1, setPluralNoun1] = useState('');
    const [verbEndingInIng1, setVerbEndingInG1] = useState('');
    const [pluralNoun2, setPluralNoun2] = useState('');
    const [adjective, setAdjective] = useState('');
    const [smallOrganisms, setSmallOrganisms] = useState('');
    const [aFeeling, setAFeeling] = useState('');
    const [weatherPhenomenon, setWeatherPhenomenon] = useState('');
    const [noun2, setNoun2] = useState('');
    const [verbEndingInIng2, setVerbEndingInG2] = useState('');
    const [pluralNoun3, setPluralNoun3] = useState('');
    const [foodItem, setFoodItem] = useState('');
    const [verb1, setVerb1] = useState('');
    const [adjective2, setAdjective2] = useState('');
    const [adjective3, setAdjective3] = useState('');
    const [foodItems, setFoodItems] = useState('');
    const [bodyOfWater, setBodyOfWater] = useState('');
    const [verb2, setVerb2] = useState('');


    const disabled = !(
        governmentRank &&
        nation &&
        peopleOfAnotherNation &&
        noun &&
        placeName &&
        liquid &&
        pluralNoun1 &&
        verbEndingInIng1 &&
        pluralNoun2 &&
        adjective &&
        verbEndingInIng2 &&
        pluralNoun3 &&
        foodItem &&
        verb1 &&
        adjective2 &&
        adjective3 &&
        foodItems &&
        bodyOfWater &&
        verb2 &&
        smallOrganisms &&
        aFeeling &&
        weatherPhenomenon &&
        noun2
    );

    const insertWord = (word: string) => {
        return(
            <u>
            {word || '______'}
            </u>
        )
    }
    const insertNumber = (number: number) => {
        return(
            <u>
            {number || '______'}
            </u>
        )
    }

    const textInput = (label: string, value: string, setter: (value: string) => void) => {
        return (
                <p>
                    <FloatLabel>
                        <InputText
                            id={label}
                            value={value}
                            onChange={(e) => setter(e.target.value )}
                        />
                        <label htmlFor={label}>{label}</label>
                    </FloatLabel><br />
                </p>
        )
    }
    const numberInput = (label: string, value: number, setter: (value: number) => void) => {
        return (
                <p>
                    <FloatLabel>
                        <InputNumber
                            id={label}
                            value={value}
                            onChange={(e) => setter(e.value || 0)}
                        />
                        <label htmlFor={label}>{label}</label>
                    </FloatLabel><br />
                </p>
        )
    }

    return (
        <>
            <Head>
                <title>(Maverick&apos;s) Story of Passover</title>
            </Head>
            <Accordion activeIndex={0} className="w-full md:w-25rem">
                <AccordionTab
                    header="Fill in the Blanks"

                >
                    <p>Fill in the blanks to create a story.</p>
                    <div className="card flex justify-content-center">
                        <p>
                            {textInput('Government Rank', governmentRank, setGovernmentRank)}
                            {textInput('Nation', nation, setNation)}
                            {textInput('People of Another Nation', peopleOfAnotherNation, setPeopleOfAnotherNation)}
                            {textInput('Noun', noun, setNoun)}
                            {textInput('Place Name', placeName, setPlaceName)}
                            {textInput('Liquid', liquid, setLiquid)}
                            {textInput('Plural Noun', pluralNoun1, setPluralNoun1)}
                            {textInput('Verb Ending in -ing', verbEndingInIng1, setVerbEndingInG1)}
                            {textInput('Plural Noun', pluralNoun2, setPluralNoun2)}
                            {textInput('Adjective', adjective, setAdjective)}
                            {textInput('Small Organisms', smallOrganisms, setSmallOrganisms)}
                            {textInput('A Feeling', aFeeling, setAFeeling)}
                            {textInput('Weather Phenomenon', weatherPhenomenon, setWeatherPhenomenon)}
                            {textInput('Noun', noun2, setNoun2)}
                            {textInput('Verb Ending in -ing', verbEndingInIng2, setVerbEndingInG2)}
                            {textInput('Plural Noun', pluralNoun3, setPluralNoun3)}
                            {textInput('Food Item', foodItem, setFoodItem)}
                            {textInput('Verb', verb1, setVerb1)}
                            {textInput('Adjective', adjective2, setAdjective2)}
                            {textInput('Adjective', adjective3, setAdjective3)}
                            {textInput('Food Items', foodItems, setFoodItems)}
                            {textInput('Body of Water', bodyOfWater, setBodyOfWater)}
                            {textInput('Verb', verb2, setVerb2)}
                            {textInput('Body of Water', '', setBodyOfWater)}
                        </p>
                    </div>
                </AccordionTab>

                <AccordionTab
                    //disabled={disabled}
                    header={`Story: ${disabled ? 'Not Ready' : 'Click to Read!'}`}
                >
                    <h1>(Maverick&apos;s) Story of Passover</h1>
                    <p>
                        Back in the day, there was the guy called {insertWord(governmentRank)} who was the ruler of {insertWord(peopleOfAnotherNation)}. He saw that
                        the {insertWord(nation)} population was increasing, so he ordered every male child to be murdered. His mom, not wanting to kill her child,
                        put him in a {insertWord(noun)} and sent him down the river.
                    </p>
                    <p>
                        The {insertWord(noun)} was watched by his sister and found by the daughter of {insertWord(governmentRank)}. She adopted him. A while later, he had
                        a mid-life crisis and he left after he realised he was {insertWord(nation)}. He got married in some {insertWord(placeName)} and found
                        burning bush. The burning bush talked to him and told him he had to free his people.
                    </p>
                    <p>
                        He came back and tried to convince his brother, who was the current {insertWord(governmentRank)}, to let them go. After the brother said
                        <i>no</i> he did a whole bunch of {insertWord(adjective)} tricks. After the {insertWord(adjective)} tricks, the brother was pretty sad that Moses had better
                        {insertWord(adjective)} than him. The {insertWord(adjective)} tricks were called the 10 plagues and they were:
                        <ol>
                            <li>All the water in the land turned to {insertWord(liquid)}</li>
                            <li>Frogs {insertWord(verbEndingInIng1)} around everywhere underfoot</li>
                            <li>{insertWord(smallOrganisms)} crawling over the bodies of the people making them {insertWord(aFeeling)}</li>
                            <li>{insertWord(pluralNoun3)} eating the crops</li>
                            <li>Cattle disease</li>
                            <li>Painful {insertWord(pluralNoun2)} all over the body</li>
                            <li>{insertWord(pluralNoun1)} running wild</li>
                            <li>{insertWord(weatherPhenomenon)} falling from the {insertWord(noun2)}</li>
                            <li>Complete darkness over the entire land</li>
                            <li>{insertWord(verbEndingInIng2)} of the first born son</li>
                        </ol>
                        The {insertWord(governmentRank)} was pretty sad about the {insertWord(verbEndingInIng2)} of his son because he
                        kind of liked that one. The {insertWord(governmentRank)} said: <i>get your people out of here!</i>
                        </p>
                    <p>
                        So, the Moses dude said <i>let&apos;s skidaddle!</i> And they packed their stuff and left. Because they were in such a rush
                        their {insertWord(foodItem)} did not {insertWord(verb1)}. It instead turned into {insertWord(adjective2)}, {insertWord(adjective3)} 
                        {insertWord(foodItems)}. They left in a hurry and made it to the {insertWord(bodyOfWater)}.
                        </p>
                    <p>
                        At the {insertWord(bodyOfWater)}, they saw the {insertWord(peopleOfAnotherNation)} approaching
                        because {insertWord(governmentRank)} changed his mind. They asked for help. The {insertWord(bodyOfWater)} parted and
                        the people {insertWord(verb2)} across to the other side. When they got there, the {insertWord(peopleOfAnotherNation)} followed them,
                        but the water crashed down on them and they perished. The people were glad to have survived to be free,
                        but they were sad about the pain and suffering of the {insertWord(peopleOfAnotherNation)} who died.
                    </p>
                </AccordionTab>
            </Accordion>
        </>
    );
}