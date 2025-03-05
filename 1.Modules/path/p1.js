//path module
const { notStrictEqual } = require('assert')
const path=require('path')
console.log(`path sep=`,path.sep)//index path

//join path
const filePath=path.join("/product","title-1","audio.png")
console.log(`path join=`,filePath)

//base path
const basePath=path.basename(filePath)
console.log(`base path=`,basePath)

//absolute path
const abPath=path.resolve(__dirname,"data","test.txt")
console.log(`absolute path=`,abPath)
//path.sep returns the platform-specific path separator (e.g., \ on Windows, / on Unix)
//path.join(...paths) joins path segments into a single path.Logs the joined path.
//path.basename(path) returns the last portion of a path.
//Logs the base path (e.g., audio.png).
// path.resolve(...paths) resolves an absolute path from relative paths.

// __dirname: The directory name of the current module.

// Logs the absolute path.






// notes
// Sure! Let’s break down the concepts of domain names, IP addresses, IPv4, and IPv6 with simple explanations and examples.

// 1. Domain Name
// What is it?

// A domain name is a human-readable address used to access websites on the internet.

// It is easier to remember than an IP address (e.g., google.com instead of 142.250.190.14).

// Example:

// google.com is a domain name.

// When you type google.com in your browser, it translates this domain name into an IP address to locate the server where the website is hosted.

// 2. IP Address
// What is it?

// An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to a network (e.g., the internet).

// It is used to identify and communicate with devices on a network.

// Example:

// 142.250.190.14 is an IP address for google.com.

// When you visit google.com, your browser uses this IP address to connect to Google’s servers.

// 3. IPv4 (Internet Protocol version 4)
// What is it?

// IPv4 is the fourth version of the Internet Protocol and is the most widely used.

// It uses a 32-bit address format, which allows for about 4.3 billion unique addresses.

// Written as four numbers separated by dots (e.g., 192.168.1.1).

// Example:

// 192.168.1.1 is an IPv4 address commonly used for local networks (like your home Wi-Fi router).

// 142.250.190.14 is the IPv4 address for google.com.

// 4. IPv6 (Internet Protocol version 6)
// What is it?

// IPv6 is the sixth version of the Internet Protocol, designed to replace IPv4.

// It uses a 128-bit address format, allowing for a much larger number of unique addresses (approximately 
// 3.4
// ×
// 1
// 0
// 38
// 3.4×10 
// 38
//  ).

// Written as eight groups of hexadecimal numbers separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).

// Example:

// 2001:4860:4860::8888 is an IPv6 address used by Google’s public DNS service.

// Comparison Between IPv4 and IPv6
// Feature	IPv4	IPv6
// Address Size	32-bit (4 numbers separated by .)	128-bit (8 groups of hex separated by :)
// Example	192.168.1.1	2001:0db8:85a3:0000:0000:8a2e:0370:7334
// Total Addresses	~4.3 billion	~
// 3.4
// ×
// 1
// 0
// 38
// 3.4×10 
// 38
 
// Purpose	Older, widely used	Newer, designed to replace IPv4
// How It All Works Together: Example
// You type a domain name in your browser:

// Example: google.com

// Your browser uses DNS (Domain Name System) to translate the domain name into an IP address:

// google.com → 142.250.190.14 (IPv4) or 2607:f8b0:4005:80a::200e (IPv6).

// Your browser connects to the server using the IP address:

// It sends a request to 142.250.190.14 (Google’s server).

// The server responds with the website data:

// Your browser receives the data and displays the Google homepage.

// Real-Life Analogy
// Domain Name: Like a contact name in your phone (e.g., "John Doe").

// IP Address: Like the actual phone number (e.g., +1-123-456-7890).

// DNS: Like your phone’s contact list, which maps names to numbers.

// IPv4 vs IPv6: Like old phone numbers (limited) vs new phone numbers (virtually unlimited).
// Why Do We Need IPv6?
// IPv4 addresses are running out because there are only about 4.3 billion unique addresses.

// IPv6 was introduced to provide a much larger pool of addresses to accommodate the growing number of devices connected to the internet (e.g., smartphones, IoT devices).

// Summary
// Domain Name: Human-readable address (e.g., google.com).

// IP Address: Numerical identifier for devices (e.g., 142.250.190.14).

// IPv4: Older, 32-bit address format (e.g., 192.168.1.1).

// IPv6: Newer, 128-bit address format (e.g., 2001:0db8:85a3::8a2e:0370:7334).

// Let me know if you need further clarification! 😊

//my question clarification
// what i have understood is instead of typing 142.250.190.14 (IPv4) or 2607:f8b0:4005:80a::200e (IPv6). we use google.com and our browser uses DNS to translate name into an IP address and our browser connects to the server using the ip address  and in return the responds with the website data .The reason for using ipv6 over ipv4 because many users are using google and we have limited 4.3 billion unique address so we use ipv6 correct if i am wrong
// (Due to technical issues, the search service is temporarily unavailable.)

// Yes, you’ve got it absolutely right! 🎉 Your understanding is spot on. Let me summarize and confirm your points:

// 1. Domain Name vs IP Address
// Instead of typing a hard-to-remember IP address like 142.250.190.14 (IPv4) or 2607:f8b0:4005:80a::200e (IPv6), we use a domain name like google.com.

// The DNS (Domain Name System) translates the domain name (google.com) into the corresponding IP address (142.250.190.14 or 2607:f8b0:4005:80a::200e).

// The browser then uses this IP address to connect to the server and fetch the website data.

// 2. Why IPv6 Over IPv4?
// IPv4 provides only about 4.3 billion unique addresses, which is not enough for the growing number of devices and users on the internet.

// IPv6 provides 
// 3.4
// ×
// 1
// 0
// 38
// 3.4×10 
// 38
//   unique addresses, which is virtually unlimited and can accommodate the increasing demand for IP addresses.

// So, IPv6 is used to overcome the limitations of IPv4 and ensure that every device can have a unique IP address.

// Your Understanding in a Nutshell
// Domain Name: Easier to remember (e.g., google.com).

// DNS: Translates the domain name into an IP address.

// IP Address: Used by the browser to connect to the server.

// IPv4 vs IPv6: IPv4 has limited addresses, so IPv6 is used to provide more addresses for the growing number of users and devices.

// Small Correction
// While IPv6 is indeed used to address the shortage of IPv4 addresses, it’s not just about Google or a single website. It’s about the entire internet. Every device connected to the internet (phones, computers, IoT devices, etc.) needs a unique IP address, and IPv6 ensures there are enough addresses for everyone.

// Example to Reinforce Your Understanding
// You type google.com in your browser.

// DNS translates google.com to an IP address, say 142.250.190.14 (IPv4) or 2607:f8b0:4005:80a::200e (IPv6).

// Your browser connects to the server at that IP address.

// The server sends back the website data, and your browser displays the Google homepage.

// Why IPv6 is Important
// With the rise of smartphones, IoT devices (like smart TVs, smart fridges, etc.), and the increasing number of internet users, IPv4 addresses are running out.

// IPv6 ensures that every device can have a unique IP address, enabling seamless communication on the internet.

// Final Confirmation
// Your understanding is 100% correct! You’ve grasped the key concepts of domain names, IP addresses, DNS, and the need for IPv6. Great job! 🚀 Let me know if you have more questions or need further clarification. 😊

// i have question say i have iphone,latop,tv and computer connected to internet when i type google.com in browser and above process happens and i want to know whether phone,laptop,computer and tv will have unique Ip address of google or different
// for clarrification on this one
// While IPv6 is indeed used to address the shortage of IPv4 addresses, it’s not just about Google or a single website. It’s about the entire internet. Every device connected to the internet (phones, computers, IoT devices, etc.) needs a unique IP address, and IPv6 ensures there are enough addresses for everyone.
// (Due to technical issues, the search service is temporarily unavailable.)

// Great question! Let’s clarify this step by step. 😊

// 1. IP Address of Google
// When you type google.com in your browser, the DNS translates it into Google’s server IP address (e.g., 142.250.190.14 for IPv4 or 2607:f8b0:4005:80a::200e for IPv6).

// This IP address is unique to Google’s server and is the same for everyone accessing google.com.

// 2. IP Address of Your Devices
// Your iPhone, laptop, TV, and computer are all devices connected to the internet.

// Each of these devices has its own unique IP address assigned by your Internet Service Provider (ISP) or your local network (e.g., your Wi-Fi router).

// These IP addresses are different from Google’s server IP address.

// 3. How It Works
// Your Devices (iPhone, Laptop, TV, Computer):

// Each device has a unique IP address (e.g., 192.168.1.2, 192.168.1.3, etc., for IPv4 or 2001:db8::1, 2001:db8::2, etc., for IPv6).

// These IP addresses are used to identify your devices on your local network or the internet.

// Google’s Server:

// Google’s server has its own unique IP address (e.g., 142.250.190.14 for IPv4 or 2607:f8b0:4005:80a::200e for IPv6).

// This IP address is the same for everyone accessing google.com.

// Communication Between Your Devices and Google:

// When you type google.com in your browser, your device sends a request to Google’s server using Google’s IP address.

// Google’s server responds with the website data, which is sent back to your device’s unique IP address.

// 4. Example Scenario
// Your iPhone: IP address = 192.168.1.2

// Your Laptop: IP address = 192.168.1.3

// Your TV: IP address = 192.168.1.4

// Your Computer: IP address = 192.168.1.5

// Google’s Server: IP address = 142.250.190.14

// When you access google.com:

// Your iPhone sends a request to 142.250.190.14 (Google’s server).

// Google’s server responds to 192.168.1.2 (your iPhone’s IP address).

// Similarly, your laptop, TV, and computer will each send requests to 142.250.190.14 and receive responses at their respective IP addresses.

// 5. Why Unique IP Addresses Are Important
// For Your Devices: Each device needs a unique IP address so that data can be sent to the correct device. For example, if you’re browsing on your laptop and streaming on your TV, the internet needs to know where to send the website data and where to send the video stream.

// For Google’s Server: Google’s server has a unique IP address so that everyone in the world can access it using the same address (google.com).

// 6. IPv6 and Unique Addresses
// IPv6 ensures that every device connected to the internet can have a unique IP address.

// This is important because:

// There are billions of devices connected to the internet (phones, laptops, TVs, IoT devices, etc.).

// IPv4 addresses are limited (~4.3 billion), but IPv6 addresses are virtually unlimited (~
// 3.4
// ×
// 1
// 0
// 38
// 3.4×10 
// 38
//  ).

// Summary
// Google’s IP Address: Same for everyone (e.g., 142.250.190.14).

// Your Devices’ IP Addresses: Unique for each device (e.g., 192.168.1.2, 192.168.1.3, etc.).

// Communication: Your devices send requests to Google’s IP address, and Google responds to your devices’ unique IP addresses.

// IPv6: Ensures every device can have a unique IP address, solving the shortage of IPv4 addresses.

// Let me know if you need further clarification! 😊

// New chat
