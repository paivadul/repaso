import { Component } from "react";

// react bootstrap
import { Form, Button } from "react-bootstrap";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        comment: "",
        comments: [],
        };
    }

    handlerComment(event) {
        console.log("handlerComment", event.target.value);
        this.setState({ comment: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({comments: [...this.state.comments, this.state.comment]})

        console.log("handleSubmit", event);
    }

    render() {
        console.log("comment", this.state.comment);
        return (
        <div>
            <Form onSubmit={(event) => this.handleSubmit(event)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Comentario</Form.Label>
                <Form.Control
                type="text"
                placeholder="Comentario"
                value={this.state.comment}
                onChange={(event) => this.handlerComment(event)}
                />
            </Form.Group>
            <Button type="submit" variant="info">
                Publicar
            </Button>
            </Form>
        </div>
        );
    }
}

export default Home;