function replaceAll(find, replace, str) {
	return str.replace(new RegExp(find, 'g'), replace);
}

self.port
		.on(
				"replacePage",
				function(jm) {

					var respString = jm;
					respString = respString.replace(/['()]/g, "");
					respString = replaceAll(" estimated", "", respString);

					var resp = JSON.parse(respString);

					var jammerDiv = $("<div>", { class: "span", style: "width:91%;" });
					var jammerRow = $("<div>", { class: "row", style: "width:100%;" });
					var jammerWidget = $("<div>", { class: "widgetlight"});
					var jammerH3 = $("<h3>", { text: "Jammer Data"});
					var jammerContent = $("<div>", { class: "widgetcontent"});

					jammerDiv.append(jammerRow);
					jammerRow.append(jammerWidget);
					jammerWidget.append(jammerH3);
					jammerWidget.append(jammerContent);

					var jammertable = $("<table>", { class: "jammerTable",style: "width:100%;" });

					var headers = $("<tr>");
					headers.append($("<th>", { text: "" }));
					headers.append($("<th>", { text: "Investments" }));
					headers.append($("<th>", { text: "Loans" }));
					headers.append($("<th>", { text: "Debt" }));

					var row2 = $("<tr>");
					row2.append($("<td>", { text: "Active" }));
					row2.append($("<td>", { class: "invActive", text: Number(resp[0].data.Investments) }));
					row2.append($("<td>", { class: "loansActive", text: Number(resp[0].data.Loans) }));
					row2.append($("<td>", { class: "debtActive", text: Number(resp[0].data.Debt) }));

					var row3 = $("<tr>");
					row3.append($("<td>", { text: "Funding" }));
					row3.append($("<td>", { class: "invFunding", text: Number(resp[2].data.Investments) }));
					row3.append($("<td>", { class: "loansFunding", text: Number(resp[2].data.Loans) }));
					row3.append($("<td>", { class: "debtFunding", text: Number(resp[2].data.Debt) }));

					var row4 = $("<tr>");
					row4.append($("<td>", { text: "Overdue" }));
					row4.append($("<td>", { class: "invOverdue", text: Number(resp[1].data.Investments) }));
					row4.append($("<td>", { class: "loansOverdue", text: Number(resp[1].data.Loans) }));
					row4.append($("<td>", { class: "debtOverdue", text: Number(resp[1].data.Debt) }));

					jammertable.append(headers);
					jammertable.append(row2);
					jammertable.append(row3);
					jammertable.append(row4);

					jammerContent.append(jammertable);

					$('div.row:nth-child(3)').before(jammerDiv);

				});
