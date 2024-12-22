return {
	{
		"VincentBerthier/auto-header.nvim",
		config = function()
			local auto_header = require("auto-header")

			local license_data = {
				author_name = "Godwin Peter .O",
				author_mail = "me@godwin.dev",
				cp_holders = "drolx Labs",
			}

			local project_license = {
				" Copyright (c) 2024 - #cp_year #cp_holders",
				"",
				" Licensed under the drolx Source License 1.0",
				" you may not use this file except in compliance with the License.",
				"    https://drolx.com/licenses/source-license-1.0",
				" Unless required by applicable law or agreed to in writing, software",
				' distributed under the License is distributed on an "AS IS" BASIS,',
				" WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.",
				" See the License for the specific language governing permissions and",
				" limitations under the License.",
			}
			local info_template = {
				"",
				" Project: #project_name",
				" Author: #author_name (#author_mail)",
				" Created At: #date_now",
				" Modified By: #author_name (#author_mail)",
				" Modified At: #date_now",
			}

			auto_header.setup({
				create = true,
				update = true,
				languages = {
					"html",
					"css",
					"scss",
					"sass",
					"typescript",
					"javascript",
					"typescriptreact",
					"yaml",
				},
				key = nil,
				templates = {
					{
						language = "*",
						prefix = "auto",
						block = "-",
						block_length = 0,
						before = {},
						after = { "" },
						data = license_data,
						template = vim.list_extend(project_license, info_template),
						track_change = {
							"Modified At: ",
							"Modified By: ",
						},
					},
				},
			})
		end,
	},
}
