import React from 'react';
import styled from 'styled-components'


const Wrapper = styled.div`
margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    & p{
        margin-right:10px;
    }
    & input {
        outline: none;
        padding: 5px 15px;
        border:none;
        border-radius: 27px;
        &:active {
            outline:none;
            border:none;
        }
    }
    `

class Search extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }



    render() {
        return (
            <Wrapper>
                <div >
                    <p> Поисе по r/  </p>
                </div>

                <input
                    type="text"
                    onChange={event => this.search(event.target.value)}
                    value={this.state.term}
                    name="search"
                    placeholder="Например dog" />

            </Wrapper>
        );
    }

    search(term) {
        this.setState({ term });
        this.props.onSearch(term);
    }
}

export default Search;