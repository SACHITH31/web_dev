function trail (raiseerror: boolean) : void{
    try {
        if (raiseerror) {
        throw new Error('Something went wrong!');
        } else {
        console.log('No errors, everything is fine!');
        }
    } catch (error) {
        console.error('Caught an error:', error);
    }
}

trail(true);
trail(false);