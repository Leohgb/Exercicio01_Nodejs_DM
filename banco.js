const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('Usuarios', 'usuario', 'senha', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(() => {
        console.log('Conexão estabelecida com sucesso.');
    })
    .catch(err => {
        console.error('Não foi possível conectar ao banco de dados:', err);
    });

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bairro: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cep: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    celular: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'clientes'
});

sequelize.sync()
    .then(() => {
        return Cliente.bulkCreate([
            {
                nome: 'Jose',
                endereco: 'Rua ficticia, 123',
                bairro: 'Irreal',
                cep: '111111-111',
                telefone: '1111-1111',
                celular: '99999-9999'
            },
            {
                nome: 'Richard',
                endereco: 'Rua ficticia, 123',
                bairro: 'Irreal',
                cep: '111111-111',
                telefone: '1111-1111',
                celular: '99999-9999'
            },
            {
                nome: 'Lopes',
                endereco: 'Rua ficticia, 123',
                bairro: 'Irreal',
                cep: '111111-111',
                telefone: '1111-1111',
                celular: '99999-9999'
            }
        ]);
    })
    .then(() => {
        console.log('Clientes cadastrados.');
    })
    .catch(err => {
        console.error('Erro: ', err);
    });