import Head from "next/head";
import { useState } from "react";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";

import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { InputNumber } from "primereact/inputnumber";

export default function TheSoupRecipe() {

    const [noun1, setNoun1] = useState('');
    const [adjective1, setAdjective1] = useState('');
    const [noun2, setNoun2] = useState('');
    const [vegetable1, setVegetable1] = useState('');
    const [number1, setNumber1] = useState(0);
    const [unusualPlant, setUnusualPlant] = useState('');
    const [noun3, setNoun3] = useState('');
    const [herb, setHerb] = useState('');
    const [adjective2, setAdjective2] = useState('');
    const [pluralNoun1, setPluralNoun1] = useState('');
    const [number2, setNumber2] = useState(0);
    const [typeOfVegetable, setTypeOfVegetable] = useState('');
    const [seasoning, setSeasoning] = useState('');
    const [pluralNoun2, setPluralNoun2] = useState('');
    const [number3, setNumber3] = useState(0);
    const [noun4, setNoun4] = useState('');
    const [unitOfMeasurement, setUnitOfMeasurement] = useState('');
    const [adjective3, setAdjective3] = useState('');
    const [noun5, setNoun5] = useState('');
    const [number4, setNumber4] = useState(0);
    const [fraction, setFraction] = useState('');
    const [flavor, setFlavor] = useState('');
    const [noun6, setNoun6] = useState('');
    const [noun7, setNoun7] = useState('');
    const [adjective4, setAdjective4] = useState('');
    const [number5, setNumber5] = useState(0);
    const [pluralNoun3, setPluralNoun3] = useState('');
    const [verb1, setVerb1] = useState('');
    const [number6, setNumber6] = useState(0);
    const [verb2, setVerb2] = useState('');
    const [noun8, setNoun8] = useState('');
    const [somethingInKitchen, setSomethingInKitchen] = useState('');
    const [number7, setNumber7] = useState(0);
    const [adjective5, setAdjective5] = useState('');
    const [kitchenUtensil1, setKitchenUtensil1] = useState('');
    const [pluralNoun4, setPluralNoun4] = useState('');
    const [kitchenUtensil2, setKitchenUtensil2] = useState('');
    const [shapes, setShapes] = useState('');
    const [number8, setNumber8] = useState(0);
    const [number9, setNumber9] = useState(0);
    const [foodItem, setFoodItem] = useState('');


    const disabled = !(
        noun1 &&
        adjective1 &&
        noun2 &&
        vegetable1 &&
        number1 &&
        unusualPlant &&
        noun3 &&
        herb &&
        adjective2 &&
        pluralNoun1 &&
        number2 &&
        typeOfVegetable &&
        seasoning &&
        pluralNoun2 &&
        number3 &&
        noun4 &&
        unitOfMeasurement &&
        adjective3 &&
        noun5 &&
        number4 &&
        fraction &&
        flavor &&
        noun6 &&
        noun7 &&
        adjective4 &&
        number5 &&
        pluralNoun3 &&
        verb1 &&
        number6 &&
        verb2 &&
        noun8 &&
        somethingInKitchen &&
        number7 &&
        adjective5 &&
        kitchenUtensil1 &&
        pluralNoun4 &&
        kitchenUtensil2 &&
        shapes &&
        number8 &&
        number9 &&
        foodItem
    );

    const insertWord = (word: string) => {
        return(
            <u>
            {word || '______'}
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
                            onChange={(e) => setter(e.target.value || 0)}
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
                            onChange={(e) => setter(e.target.value || 0)}
                        />
                        <label htmlFor={label}>{label}</label>
                    </FloatLabel><br />
                </p>
        )
    }

    return (
        <>
            <Head>
                <title>The <u>{noun1}</u> ball soup recipe</title>
            </Head>
            <Accordion activeIndex={0} className="w-full md:w-25rem">
                <AccordionTab
                    header="Fill in the Blanks"
                >
                    <p>Fill in the blanks to create a story.</p>
                    <div className="card flex justify-content-center">
                        <p>
                            {textInput('Noun', noun1, setNoun1)}
                            {textInput('Adjective', adjective1, setAdjective1)}
                            {textInput('Noun', noun2, setNoun2)}
                            {textInput('Vegetable', vegetable1, setVegetable1)}
                            {numberInput('Number', number1, setNumber1)}
                            {textInput('Unusual Plant', unusualPlant, setUnusualPlant)}
                            {textInput('Noun', noun3, setNoun3)}
                            {textInput('Herb', herb, setHerb)}
                            {textInput('Adjective', adjective2, setAdjective2)}
                            {textInput('Plural Noun', pluralNoun1, setPluralNoun1)}
                            {numberInput('Number', number2, setNumber2)}
                            {textInput('Type of Vegetable', typeOfVegetable, setTypeOfVegetable)}
                            {textInput('Seasoning', seasoning, setSeasoning)}
                            {textInput('Plural Noun', pluralNoun2, setPluralNoun2)}
                            {numberInput('Number', number3, setNumber3)}
                            {textInput('Noun', noun4, setNoun4)}
                            {textInput('Unit of Measurement', unitOfMeasurement, setUnitOfMeasurement)}
                            {textInput('Adjective', adjective3, setAdjective3)}
                            {textInput('Noun', noun5, setNoun5)}
                            {numberInput('Number', number4, setNumber4)}
                            {textInput('Fraction', fraction, setFraction)}
                            {textInput('Flavor', flavor, setFlavor)}
                            {textInput('Noun', noun6, setNoun6)}
                            {textInput('Noun', noun7, setNoun7)}
                            {textInput('Adjective', adjective4, setAdjective4)}
                            {numberInput('Number', number5, setNumber5)}
                            {textInput('Plural Noun', pluralNoun3, setPluralNoun3)}
                            {textInput('Verb', verb1, setVerb1)}
                            {numberInput('Number', number6, setNumber6)}
                            {textInput('Verb', verb2, setVerb2)}
                            {textInput('Noun', noun8, setNoun8)}
                            {textInput('Something in Kitchen', somethingInKitchen, setSomethingInKitchen)}
                            {numberInput('Number', number7, setNumber7)}
                            {textInput('Adjective', adjective5, setAdjective5)}
                            {textInput('Kitchen Utensil', kitchenUtensil1, setKitchenUtensil1)}
                            {textInput('Plural Noun', pluralNoun4, setPluralNoun4)}
                            {textInput('Kitchen Utensil', kitchenUtensil2, setKitchenUtensil2)}
                            {textInput('Shapes', shapes, setShapes)}
                            {numberInput('Number', number8, setNumber8)}
                            {numberInput('Number', number9, setNumber9)}
                            {textInput('Food Item', foodItem, setFoodItem)}
                        </p>
                    </div>
                </AccordionTab>

                <AccordionTab
                    disabled={disabled}
                    header={`Story: ${disabled ? 'Not Ready' : 'Click to Read!'}`}
                >
                    <>
                        <h1>The {insertWord( noun1 )} ball soup recipe</h1>
                        <p>
                            Get ready to make the world's most {insertWord(adjective1)} soup. You may even want to double this recipe
                            and keep half in the {insertWord(noun2)} for later.
                        </p>
                    </>
                </AccordionTab>
            </Accordion>
        </>
    );
}