/**
 * 
 * @param {(s: string) => void} onChange 
 * @param {string} value 
 * @param {string} placeholder 
 * @param {} svg
 * @returns 
 */

export function SearchBar ({onChange, value, placeholder, svg}) {
    return <div>
        <input type="text" className="form-control" 
            svg = {svg}
            value={value} 
            placeholder={placeholder} 
            onChange={(e) => onChange(e.target.value)} />
    </div>
}