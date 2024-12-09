import { FormEvent } from "react";
import { useActionState } from "react";

type State = {
    name: string;
};

export const ActionStateTestPage = () => {
    const [state, formAction, isPending] = useActionState(
        (prevState: State, formData: FormData) => {
            const newName = formData.get("name") as string;
            console.log("Submitted name:", newName);

            return { ...prevState, name: newName };
        },
        { name: "" }
    );

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formAction(formData);
    };

    return (
        <div>
            <h1>ActionStateTestPage</h1>
            <div><strong>Имя:</strong> {state.name}</div>
            <div>{isPending ? "Pending..." : "Not Pending"}</div>

            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Введите имя" required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
