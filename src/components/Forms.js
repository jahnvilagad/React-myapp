import React, { useState } from 'react'

const Forms = (props) => {
    const [text, setText] = useState("Text Forms");
    return (
        <div>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
        </div>
    )
}

export default Forms
