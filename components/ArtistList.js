const ArtistList = ({ signedUp, setSignedUp, taken, setTaken }) => {

    const handleDelete = (index, timeSlot) => {
        setTaken(taken.filter((time) => time != timeSlot))
        setSignedUp(signedUp.filter((artist, idx) => idx != index))
    }

    return (
        <div className="col-sm-7 text-center" style={{ height: '400px', opacity: '0.9' }}>
            <div className="col-sm-12">
                <div className="card" style={{minHeight: '400px'}}>
                    <div className="list-group">
                        <div className="card-header">
                            Schedule
                        </div>
                        <div className="card-body">
                            <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                                {
                                    signedUp.length < 1 ? 'No artists currently signed up' 
                                    : signedUp.map((currentSignedUp, idx) => {
                                        return <li key={idx} className="d-flex list-group-item justify-content-between">
                                                <span><strong className='artistname'>{currentSignedUp.artist}</strong> &#40;{currentSignedUp.timeSlot}&#41;</span>
                                                    <button className="btn btn-danger" onClick={(e) => {
                                                        e.preventDefault()
                                                        handleDelete(idx, currentSignedUp.timeSlot)
                                                    }}>Delete</button>
                                                </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 480px) {
                    .artistname {
                        display: block;
                    }
                }
            `}</style>
        </div>
    )
}

export default ArtistList