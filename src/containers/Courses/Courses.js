import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Courses.css';

import Course from '../../components/Course/Course';
import FullCourse from '../../containers/FullCourse/FullCourse';


class Courses extends Component {
    state = {
        coursesLoaded: [
            {id: 100, title: 'Diseño de paginas web', content: 'Con este curso podras aprender las bases fundamentales para crear tu propia web'},
            {id: 101, title: 'Curso de ReactJS', content: 'Vamos a aprender a crear paginas SPA reactivas con este maravilloso curso'},
            {id: 102, title: 'Curso de Algebra lineal', content: 'Reforzamos las bases necesarias para hacer calculos avanzados luego v:'},
            {id: 103, title: 'Otro curso 123', content: 'Maravilloso curso que te va a encantar'},
            {id: 104, title: 'Cursito online 9992', content: 'porque online te enseña mejor que la universidad xD'},
            {id: 105, title: 'Curso powah', content: 'las maravillas de los cursos que dicen powah merecen la pena'},
        ]
    }


    courseClickHandler = (id, info) => {
        let params = Object.keys(info)
            .map( ikey => params = ikey + '=' + encodeURI(info[ikey]) +'&' )
            .reduce( (acc, cur) => acc + cur)
        
        params = params.substr(0, params.length - 1)
        this.props.history.push({
            pathname: this.props.match.url + '/' + id, 
            search: params
        })
    }


    render() {
        const cursos = this.state.coursesLoaded

        return (
            <div className='Courses'>
                {cursos.map(curso =>
                    <Course 
                        key={curso.id}
                        title={curso.title} 
                        clicked={this.courseClickHandler.bind(this, curso.id, {title: curso.title, content: curso.content})} />
                )}
                <Route path={this.props.match.url + '/:id'} component={FullCourse} />
            </div>
        )
    }
}

export default Courses;