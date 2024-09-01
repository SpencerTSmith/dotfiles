return {
	"nvimdev/dashboard-nvim",
	event = "VimEnter",
	opts = {
		theme = "hyper",
		shortcut_type = "number",
		config = {
			header = {
				[[                                                ]],
				[[                                          _.oo. ]],
				[[                  _.u[[/;:,.         .odMMMMMM' ]],
				[[               .o888UU[[[/;:-.  .o@P^    MMM^   ]],
				[[              oN88888UU[[[/;::-.        dP^     ]],
				[[             dNMMNN888UU[[[/;:--.   .o@P^       ]],
				[[            ,MMMMMMN888UU[[/;::-. o@^           ]],
				[[            NNMMMNN888UU[[[/~.o@P^              ]],
				[[            888888888UU[[[/o@^-..               ]],
				[[           oI8888UU[[[/o@P^:--..                ]],
				[[        .@^  YUU[[[/o@^;::---..                 ]],
				[[      oMP     ^/o@P^;:::---..                   ]],
				[[   .dMMM    .o@^ ^;::---...                     ]],
				[[  dMMMMMMM@^`       `^^^^                       ]],
				[[ YMMMUP^                                        ]],
				[[  ^^                                            ]],
				[[                                                ]],
			},
			week_header = {
				enable = false,
			},
			shortcut = {
				{
					icon = " ",
					desc = "Update",
					group = "@property",
					action = "Lazy update",
					key = "u"
				},
				{
					icon = " ",
					desc = "Files",
					group = "DiagnosticHint",
					action = "Telescope find_files",
					key = "f",
				},
				{
					icon = " ",
					desc = "Exit",
					group = "Label",
					action = "qa",
					key = "q",
				},
			},
			project = { enable = true, limit = 8, icon = '  ', label = 'Recent Projects: ', action = 'Telescope find_files cwd=', },
			mru = { limit = 10, icon = '  ', label = 'Recent Files: ', cwd_only = false, },
			footer = {}
		},
		hide = {
			statusline = false,
		}
	},
	dependencies = { { "nvim-tree/nvim-web-devicons" } },
}
