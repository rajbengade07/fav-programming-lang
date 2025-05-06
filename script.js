function show()
{
	event.preventDefault();
	let name=document.getElementById("name");
	let j=document.getElementById("java");
	let p=document.getElementById("python");
	let js=document.getElementById("javascript");
	let msg=document.getElementById("msg");
	
	if(name.value==="")
	{
		alert("please enter your name");
		msg.innerHTML="";
		name.focus();
		return;
	}
	if(name.value.trim()==="")
	{
		alert("Name can not be blank space");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;
	}
	if(!name.value.match(/^[A-Za-z ]+$/))
	{
		alert("Name should only contain alphabets");
		msg.innerHTML="";
		name.value="";
		name.focus();
		return;
	}
	
	let language = [];
	if (j.checked) 
		language.push("Java");
	if (p.checked) 
		language.push("Python");
	if (js.checked) 
		language.push("JavaScript");

	if (language.length === 0) 
	{
		msg.innerHTML = `${name.value} doesn't know any languages`;
	} 
	else
	 {
		msg.innerHTML = `${name.value} knows ${language.join(", ")}`;
	 }

	
}