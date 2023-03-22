{/* rest of component removed for brevity */ }

{/* this functionality can be repeated for each form input */ }
<form onSubmit={createUser}> {
        hasBeenSubmitted ?
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3>
    }
    <div>
        <label>Username: </label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
    {/* Email and Password inputs removed for brevity */}
</form>

{/* rest of component removed for brevity */ }
