function New_Comments() 
{ 	
	//Step-0, We perform following automation replay mechanism only when there is no Case comment available
	element_Name = document.getElementsByClassName("noRowsHeader");
	
	console.log(element_Name.length)
	
	//If the length is 1, it means that there is "noRowsHeader" className aviable saying "No comment available and we just new an automation comment"
	//If the length is 0, it means that there is no "noRowsHeader" className aviable saying "At least one comment available and we just return directly"
	if (element_Name.length != 0)
	{		
		console.log("No comment available and we just new an automation comment via next action");
	}
	else
	{
		console.log("At least one comment available and we just return directly");
		return;
	}
  
	//Step-1. Here below, we use the "document.getElementsByClassName" to address the information in table element <tr> and <td>
	element_Name = document.getElementsByClassName("dataCol last col02");
	console.log(element_Name.length)
	
	//We use the "innerText" property to access the information inside the table 
	sentence = element_Name[0].innerText;
	
	//一個偷懶的檢查方式
	if( sentence == null )
	{
	  alert("step-1 at content.js"); 	
	  console.log('Wahaha-1')
	  return;
	}
	else
	{
	  //alert(sentence);		
	}
	
	//Step-2a. To get "Public" && "Send Customer Notification" checkbox UI components
	element_Name = document.getElementById("IsPublished");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  //alert("step-2a at content.js"); 	
	  console.log('Wahaha-2a')
	  return;
	}
	else
	{
	  element_Name.checked = "1";
	}
	
	//Step-2b. To get "Public" && "Send Customer Notification" checkbox UI components
	element_Name = document.getElementById("IsNotificationSelected");
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  //alert("step-2b at content.js"); 	
	  console.log('Wahaha-2b')
	  return;
	}
	else
	{
		element_Name.checked = "1";
	}
	
	//Step-3. To get Comment textarea UI component
	element_Name = document.getElementById("CommentBody");

	const issue_string = 'issue';//string pattern for "issue"
	
	//一個偷懶的檢查方式
	if( element_Name == null )
	{
	  //alert("step-3 at content.js"); 	
	  console.log('Wahaha-3')
	  return;
	}
	else
	{
		if(sentence.toLowerCase().includes(issue_string.toLowerCase()) == true)
		{
			element_Name.value = "Hi member,\
								Could you please send us more information about to this problem?\
								If it's issue lead to certification failed, please send us the UCC and sniffer log.\
								Thanks.";
		}
		else
		{
			element_Name.value = "Hi member,\
								Thanks for your request.\
								We will try to get answer for your problem.\
								Thanks.";
		}	
	}	
	
	//Step-4. Get the "Save button" and "Click" it
	//document.getElementsByName("save")[0].click();
}

	
if(document.readyState !== 'complete') 
{
    window.addEventListener('load',afterWindowLoaded);
} 
else 
{
    afterWindowLoaded();
}

function afterWindowLoaded()
{
	//alert("OK 123 at content.js");
	New_Comments();
}

