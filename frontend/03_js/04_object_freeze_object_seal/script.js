const myObj = {
    firstName: 'sachith',
    lastName: 'kasa',
    'clg-details': {
        'clg-name': 'GPREC',
        'clg-location': 'kurnool',
        'clg-section': 'c'
    },
}

// IMPORTANT NOTES: 
// Object.seal(objectname-here); 
// ------ this is used to seal the object which means:
// ------- i) no one can delete the exisiting data or 
// ------- ii) no new values gets addeded 
// ------- iii) modification on the exisiting data can be happened   
// conclusion : modify or change(YES), add(NO), delete(NO)


// Object.freeze(objectname-here); 
// ------ this is used to seal the object which means:
// ------- i) no one can delete the exisiting data or 
// ------- ii) no new values gets addeded 
// ------- iii) no modifications will be done on existing data 
// conclusion : modify or change(NO), add(NO), delete(NO)
