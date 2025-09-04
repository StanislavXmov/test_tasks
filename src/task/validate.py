def passwords():
    return {
        'short': ['short', '1234567'],
        'no_digits': ['password', 'strongPass'],
        'no_uppercase': ['password123', 'strongpass1'],
        'contains_space': ['password 123', 'strongPass1'],
        'valid': ['password123', 'Password123', 'StrongPass1']
    }

def validate_passwords(passwords):
    return all((
        all(len(password) >= 8 for password in passwords),
        any(any(char.isdigit() for char in password) for password in passwords),
        any(any(char.isupper() for char in password) for password in passwords),
        all(' ' not in password for password in passwords)
    ))

print(validate_passwords(passwords()["short"]))
print(validate_passwords(passwords()["no_digits"]))
print(validate_passwords(passwords()["no_uppercase"]))
print(validate_passwords(passwords()["contains_space"]))
print(validate_passwords(passwords()["valid"]))