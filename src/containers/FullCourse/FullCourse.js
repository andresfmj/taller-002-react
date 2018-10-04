import React, { Component } from 'react';

class FullCourse extends Component {
    state = {
        loadedCourseId: null,
        loadedContent: null,
        error: null
    }

    componentDidMount() {
        if (this.props.location.search) {
            let params = this.getParams(this.props.location.search)
            this.setState({
                loadedCourseId: this.props.match.params.id,
                loadedContent: params
            })
        } else {
            this.setState({error: 'Curso no encontrado'})
        }
        
    }

    getParams(params) {
        let search = params.substr(1)
        search = JSON.parse('{"'+decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}')

        return search
    }

    componentDidUpdate() {
        if (this.state.loadedCourseId && (this.state.loadedCourseId !== this.props.match.params.id)) {
            let params = this.getParams(this.props.location.search)
            this.setState({
                loadedCourseId: this.props.match.params.id,
                loadedContent: params
            })
        }
    }

    render() {
        let loaded = null
        if (this.state.loadedCourseId) {
            loaded = (
                <div>
                    <h2>{this.state.loadedContent.title}</h2>
                    <p>{this.state.loadedContent.content}</p>
                </div>
            )
        }

        if (this.state.error)
            loaded = <h3>{this.state.error}</h3>

        return (
            <div className='FullCourse'>
                {loaded}
            </div>
        )
    }
}

export default FullCourse;