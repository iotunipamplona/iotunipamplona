const models ={
    userModel: require(`./nosql/user`),
    co2i1Model: require(`./nosql/co2i1`),
    co2i2Model: require(`./nosql/co2i2`),
    co2i3Model: require(`./nosql/co2i3`),
    humedadi1Model: require(`./nosql/humedadi1`),
    humedadi2Model: require(`./nosql/humedadi2`),
    humedadi3Model: require(`./nosql/humedadi3`),
    taskModel: require(`./nosql/task`),
    temperaturai1Model: require(`./nosql/temperaturai1`),
    temperaturai2Model: require(`./nosql/temperaturai2`),
    temperaturai3Model: require(`./nosql/temperaturai3`),

};

module.exports = models;