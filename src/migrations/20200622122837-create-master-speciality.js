'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('masterSpecialities', {
			specialityId: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			masterId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "masters",
          key: "id",
        },
        onDelete: "restrict",
        onUpdate: "CASCADE",
      },
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('masterSpecialities');
	}
};