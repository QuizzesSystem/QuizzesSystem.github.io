const topics = {
    it: 'Information Technology',
    languages: 'Languages',
    hardware: 'Hardware',
    software: 'Software',
    frameworks: 'Frameworks'
};

function getUserData() {
    const user = sessionStorage.getItem('user');
    if (user) {
        return JSON.parse(user);
    } else {
        return undefined;
    }
}

function setUserData(user) {
    sessionStorage.setItem('objectId', JSON.stringify(user.objectId));
    sessionStorage.setItem('user', JSON.stringify(user));
}

function clearUserData() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('objectId');
}

export {
    topics,
    getUserData,
    setUserData,
    clearUserData
};