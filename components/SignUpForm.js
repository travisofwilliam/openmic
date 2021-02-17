import { useState } from 'react'

const SignUpForm = ({ signedUp, setSignedUp, taken, setTaken }) => {

    const [artist, setArtist] = useState('')
    const [timeSlot, setTimeSlot] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (taken.includes(timeSlot)) {
            alert('That time slot is not available!')
        } else if (timeSlot === '--' || timeSlot === '') {
            alert('Please select a time slot!')
        } else if (artist === '') {
            alert('Please enter an artist/band name!')
        } else if (signedUp.some(signedUpArtist => signedUpArtist.artist === artist)) {
            alert(`${artist} is already signed up for Open Mic!`)
        } else {

            const signUpObject = {
                artist,
                timeSlot
            }

            setSignedUp([
                ...signedUp,
                signUpObject
            ])

            setTaken([
                ...taken,
                timeSlot
            ])

            alert(`${artist} has been added to the line up!`)
        }

        setArtist('')
    }

    return (
        <div className='col-sm-5 signup'>
            <div className="col-sm-12">
                <div className="card text-center" style={{ height: '400px', opacity: '0.9' }}>
                    <h5 className='card-header'>Sign Up!</h5>
                    <div className="row card-body h-100 align-items-center text-center justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={artist} placeholder="Band/Artist" onChange={(e) => {setArtist(e.target.value)}} className="mb-4" />
                            <br/>
                                <div className="dropdown">
                                    <select className="custom-select bg-dark btn btn-secondary dropdown-toggle text-white" onChange={(e) => {setTimeSlot(e.target.value)}}>
                                        <option value="--">Time Slot</option>
                                        <option value="5:45pm - 6:00pm" disabled={ taken.includes('5:45pm - 6:00pm') ? true : null }>5:45pm - 6:00pm</option>
                                        <option value="6:00pm - 6:15pm" disabled={ taken.includes('6:00pm - 6:15pm') ? true : null }>6:00pm - 6:15pm</option>
                                        <option value="6:15pm - 6:30pm" disabled={ taken.includes('6:15pm - 6:30pm') ? true : null }>6:15pm - 6:30pm</option>
                                        <option value="6:30pm - 6:45pm" disabled={ taken.includes('6:30pm - 6:45pm') ? true : null }>6:30pm - 6:45pm</option>
                                    </select>
                                </div>
                            <br/>
                            <button type="submit" className="btn btn-primary">Sign Up</button> 
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpForm