function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("Arrays must be of equal length");
    }

    const userProfiles = [];
    for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            originalName: names[i],
            modifiedName: modifiedNames[i],
            id: i + 1
        });
    }

    return userProfiles;
}
const originalNames = ["kofi", "randy", "peter"];
const modifiedNames = ["kofi1", "randy2", "peter3"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);




