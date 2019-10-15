export const compare = (array, choiceId) => {
    for (let i = 0; i < array.length; i++) {
        const choice = array[i];
        if (choice.id === choiceId) {
            return choice;
        }
    }
};