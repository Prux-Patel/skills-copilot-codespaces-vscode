function skillmembers() {
  return {
    name: 'skillmembers',
    description: 'List all members with a specific skill',
    options: [
      {
        name: 'skill',
        description: 'The skill to search for',
        type: 3,
        required: true,
      },
    ],
    async execute(interaction) {
      const skill = interaction.options.getString('skill');
      const members = await getMembersWithSkill(skill);
      await interaction.reply(`Members with the skill "${skill}": ${members.join(', ')}`);
    },
  };
}