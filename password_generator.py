import random
import string


def generate_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ""

    for _ in range(length):
        password += random.choice(characters)

    return password


def get_password_length():
    while True:
        user_input = input("Enter password length: ")

        if not user_input.isdigit():
            print("Please enter numbers only.")
            continue

        length = int(user_input)

        if length <= 0:
            print("Password length must be greater than 0.")
            continue

        return length


def main():
    print("=======================")
    print("Password Generator Tool")
    print("=======================")

    length = get_password_length()
    password = generate_password(length)

    print("\nYour generated password is:")
    print(password)


if __name__ == "__main__":
    main()
