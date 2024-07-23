import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const SpeechForm = () => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const handleSpeechRecognition = (fieldSetter) => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'ru-RU';

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            fieldSetter(speechResult);
        };

        recognition.start();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/form', {
                name,
                subject,
            });
            console.log(response.data);
            window.location.reload(); // Перезагрузка страницы после успешной отправки формы
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <div>
        //         <label>Имя:</label>
        //         <input
        //             type="text"
        //             value={name}
        //             onChange={(e) => setName(e.target.value)}
        //         />
        //         <button type="button" onClick={() => handleSpeechRecognition(setName)}>
        //             🎤
        //         </button>
        //     </div>
        //     <div>
        //         <label>Email:</label>
        //         <input
        //             type="email"
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //         />
        //         <button type="button" onClick={() => handleSpeechRecognition(setEmail)}>
        //             🎤
        //         </button>
        //     </div>
        //     <div>
        //         <label>Сообщение:</label>
        //         <textarea
        //             value={message}
        //             onChange={(e) => setMessage(e.target.value)}
        //         ></textarea>
        //         <button type="button" onClick={() => handleSpeechRecognition(setMessage)}>
        //             🎤
        //         </button>
        //     </div>

        // </form>

<div>
<Form onSubmit={handleSubmit}>

<div className="mb-3">
<Form.Label>ФИО проверяющего</Form.Label>
<InputGroup>
<InputGroup.Text id="basic-addon1">  
<Button className="btn-block" variant="secondary" onClick={() => handleSpeechRecognition(setName)}>
<FontAwesomeIcon icon="fa-solid fa-microphone" />
</Button>
</InputGroup.Text>
<Form.Control placeholder="Укажите ФИО" type="text" value={name} onChange={(e) => setName(e.target.value)} />
</InputGroup>
<Form.Text className="text-muted">Укажите фамилию имя отчество полностью.</Form.Text>

</div>

<div className="mb-3">
<Form.Label>Объект</Form.Label>
<InputGroup>
<InputGroup.Text id="basic-addon1">  
<Button className="btn-block" variant="secondary" onClick={() => handleSpeechRecognition(setSubject)}>
<FontAwesomeIcon icon="fa-solid fa-microphone" />
</Button>
</InputGroup.Text>
<Form.Control placeholder="Укажите наименование объекта." type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
</InputGroup>
<Form.Text className="text-muted">Укажите наименование объекта, на котором производится инспекция.</Form.Text>
</div>


    <div className="mb-3 d-grid gap-2">
    <Button className="btn-block btn-lg" variant="primary" type="submit">
    Отправить чеклист
    </Button>
    </div>
    </Form>
    
</div>

    );
};

export default SpeechForm;