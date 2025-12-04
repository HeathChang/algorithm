/**
 * OBJECTIVE:
 * 
 * ALGORITHM: Min-Heap
 **/


const solution = (N, coffee_times) => {
    const compare = (a, b) => {
        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }
        return a[1] - b[1];
    };


    const minHeap = () => {
        const heap = [];

        const push = (item) => {
            heap.push(item);
            let i = heap.length - 1;
            while (i > 0) {
                const parentIndex = Math.floor((i - 1) / 2);
                if (compare(heap[parentIndex], heap[i]) <= 0) break;

                [heap[parentIndex], heap[i]] = [heap[i], heap[parentIndex]];
                i = parentIndex;
            }
        };

        const pop = () => {
            if (heap.length === 0) return undefined;
            if (heap.length === 1) return heap.pop();

            const top = heap[0];
            heap[0] = heap.pop();
            let i = 0;

            while (true) {
                let smallest = i;
                const left = i * 2 + 1;
                const right = i * 2 + 2;

                if (left < heap.length && compare(heap[left], heap[smallest]) < 0) {
                    smallest = left;
                }

                if (right < heap.length && compare(heap[right], heap[smallest]) < 0) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
                i = smallest;
            }
            return top;
        };

        return { push, pop, size: () => heap.length };
    };


    const { push, pop, size } = minHeap();
    const result = [];
    let nextIndex = 1;

    for (let i = 0; i < N && i < coffee_times.length; i++) {
        push([coffee_times[i], nextIndex]);
        nextIndex++;
    }

    while (size() > 0) {
        const [finishTime, order] = pop();
        result.push(order);

        if (nextIndex <= coffee_times.length) {
            const timeNeeded = coffee_times[nextIndex - 1];
            const newFinishTime = finishTime + timeNeeded;
            push([newFinishTime, nextIndex]);
            nextIndex++;
        }
    }

    return result;
};



// Test cases
console.log(solution(3, [4, 2, 2, 5, 3])); // Expected: [2,3,1,5,4]
console.log(solution(1, [100, 1, 50, 1, 1])); // Expected: [1,2,3,4,5]