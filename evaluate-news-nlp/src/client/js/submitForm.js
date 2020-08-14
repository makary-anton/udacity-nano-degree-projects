
 import {urlValidation} from "./vaildUrl";

function submitFormFun(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlIput = document.getElementById('url-text').value;

    Client.urlValidation(urlIput);


    console.log("::: Form Submitted :::")

    if (urlValidation(urlIput)) {
        fetch('http://localhost:5000/sentiment', {
            method: 'POST',
            body: JSON.stringify({bodyData: urlIput}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('results').innerHTML = `
            <div>
                <label for="">polarity : </label>
                <p id="polarity">${res.polarity}</p>
            </div>
    
            <div>
                <label for="">subjectivity : </label>
                <p id="subjectivity">${res.subjectivity}</p>
            </div>

            <div>
                <label for="">text : </label>
                <p id="text">${res.text}</p>
            </div>

            <div>
                <label for="">polarity_confidence : </label>
                <p id="polarity_confidence">${res.polarity_confidence}</p>
            </div>

            <div>
                <label for="">subjectivity_confidence : </label>
                <p id="subjectivity_confidence">${res.subjectivity_confidence}</p>
            </div>
            `
        }).catch(function(error){;
            console.error()
        });
    } else if(!urlValidation(urlIput) || urlIput == '') {
        alert('Please input vaild url');
        document.querySelector('.error').style.display = "block";
    }

    
}

export { submitFormFun }
