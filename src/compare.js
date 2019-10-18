export const compare = (array, choiceId) => {
    let match;
    for (let i = 0; i < array.length; i++) {
        const choice = array[i];
        if (choice.id === choiceId) {
            match = choice;
        }
    }
    return match;
};