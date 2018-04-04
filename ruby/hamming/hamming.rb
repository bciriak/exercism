class Hamming
  def self.compute(dna_strand1, dna_strand2)
    raise ArgumentError unless dna_strand1.size == dna_strand2.size

    dna_strand1.chars.zip(dna_strand2.chars).map.count { |e1, e2| e1 != e2 }
  end
end

module BookKeeping
  VERSION = 3
end
