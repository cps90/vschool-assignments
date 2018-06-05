import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            anchorEl: null
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
        
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleSearchClick = () => {
        this.props.history.push('/search');
    }

    render() {
        console.log(this.props)
        const { anchorEl } = this.state;
        return (
                <div className="links">
                    <div className="navWide">
                        <h1>tT<span>news</span></h1>
                        
                        <Link className="home" to="/"> Home </Link>
                        <Link className="business" to="/business"> Business </Link>
                        <Link className="sports" to="/sports"> Sports </Link>
                        <Link className="politics" to="/politics"> Politics </Link>
                        <i className="searchButton" class="material-icons" onClick={ this.handleSearchClick }>search</i>
                    </div>
                    <div className="navNarrow">
                        <h1>tT<span>news</span></h1>
                        <i className="searchButton" class="material-icons" onClick={ this.handleSearchClick }>search</i>
                        <Button
                            aria-owns={anchorEl ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                        >
                            <i className="hamburger" class="material-icons">menu</i>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}>
                                <Link className="home" to="/"> Home </Link>
                            </MenuItem>
                            
                            <MenuItem onClick={this.handleClose}>
                                <Link className="business" to="/business"> Business </Link>
                            </MenuItem>
                            
                            <MenuItem onClick={this.handleClose}>
                                <Link className="sports" to="/sports"> Sports </Link>
                            </MenuItem>
                            
                            <MenuItem onClick={this.handleClose}>
                                <Link className="politics" to="/politics"> Politics </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                </div>
        )
    }

}

export default withRouter(Navbar)

