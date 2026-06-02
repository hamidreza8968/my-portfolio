type ButtonProps = {
    label: string;
    onClick?: () => void;
};

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            className="px-16 py-2 bg-blue-500 text-white rounded-lg"
            onClick={onClick}
        >
            {label}
        </button>
    );
}