import React from 'react';
import Container from 'react-bootstrap/Container';


const About = () => {
    return (
        <div>
            <Container className="my-5">
            <h2 className="mb-5">О сервисе</h2>
            <p>
                Этот сервис позволяет пользователям заполнять чеклисты с помощью голоса и отправлять их в формате предзаполненного шаблона. <br></br>
                Данные автоматически сохраняются в базе данных. Сервис использует 
                Web Speech API для распознавания речи и Flask для обработки данных на сервере.
            </p>
            </Container>
        </div>
    );
};

export default About;