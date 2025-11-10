import LabelAndInput from "../components/LabelAndInput"
import Select from "../components/Select"
import { educationSelect, purposeSelect } from "../utils/selectOptions"
import { showTooltip } from "../utils/feedback"
import { useEffect } from "react"

export default function Feedback() {
    useEffect(() => { showTooltip(); }, []);
    return (
        <main>
            <form action="#">
                <fieldset>
                    <legend>Personal information</legend>
                    <LabelAndInput inputId="fullname" labelText="Last name and first name" type="text" />
                    <LabelAndInput inputId="email" labelText="E-mail" type="email" />
                    <LabelAndInput inputId="age" labelText="Age" type="number" min="1" max="120"/>
                    <Select selectId="education" labelText="Education" options={educationSelect} />
                </fieldset>
                <Select selectId="purpose" labelText="Purpose of feedback" options={purposeSelect} />
                <label htmlFor="details">Details (1000 characters maximum)</label>
                <textarea id="details" maxLength="1000"></textarea>

                <LabelAndInput inputId="consent" labelText="I consent to the processing of personal data" type="checkbox" />
                <input type="submit" value="Submit"></input>
            </form>
        </main>
    )
}