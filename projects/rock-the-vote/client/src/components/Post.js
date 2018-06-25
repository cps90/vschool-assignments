import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getIssues, addIssue } from '../redux'

function Post() {
    return (
    <div>
        <form>
            <input type="text"/>
            <input type="text"/>
            <button>Submit</button>
        </form>
    </div>
    )
}


export default Post