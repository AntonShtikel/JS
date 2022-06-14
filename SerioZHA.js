/*
const formToJSON = (elements) =>
    [].reduce.call(
        elements,
        (data,element) => {
            data[element,name] = element.value;
            return data;
        },
        {},
    );
const handleFromSubmit = (event) => {
    event.preventDefault()
    const data= {};
    const dataContainer = document.getElementsByClassName('resultsDisplay')[0];
    dataContainer.textContent = JSON.stringify(data, null, '')
};

const form = document.getElementsByClassName('contact-form')[0];
form.addEventListener('submit', handleFromSubmit);
*/
document.querySelector('button').onclick = () => {
    console.log(document.querySelector('#surname').value)
}
