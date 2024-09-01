return {
	"stevearc/oil.nvim",
	event = "VimEnter",
	opts = {
		delete_to_trash = true,
		default_file_explorer = true,
	},
	dependencies = { "nvim-tree/nvim-web-devicons" },
	keys = {
		{"-", function() require("oil").open() end, desc = "Oil: Open parent directory"}, },
}
