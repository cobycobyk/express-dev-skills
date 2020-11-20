
const skills = [
    {id: 1, skill: 'HTML', learn: 'true'},
    {id: 2, skill: 'CSS', learn: 'true'},
    {id: 3, skill: 'Javascript', learn: 'true'},
    {id: 4, skill: 'jQuery', learn: 'true'},
    {id: 5, skill: 'node.js', learn: 'true'},
    {id: 6, skill: 'Express', learn: 'true'},
    {id: 7, skill: 'MongoDB', learn: 'false'},
    {id: 8, skill: 'Python', learn: 'false'},
]
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
};
function update(id, updatedSkill) {
    Object.assign(skills.find(s => s.id === parseInt(id)), updatedSkill);
};

function deleteOne(id) {
    id = parseInt(id);
    skills.splice(skills.findIndex(s => s.id ===id), 1);
};
function create(skill) {
    skill.id = Math.floor(Math.random() * 100);
    skill.learn = false;
    skills.push(skill);
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}; 